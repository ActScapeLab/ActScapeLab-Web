#
# Newsに追加した記事を自動でRouterに追加する
#

from dataclasses import dataclass
from pathlib import Path

@dataclass
class Page:
    fileName:str

    def __repr__(self) -> str:
        return self.path

    def importer(self):
        return f"import {self.fileName} from '../views/{self.fileName}.vue'"

    def router(self):
        return '  {\n'+f"    path: '{self.path}',\n    component: {self.fileName}\n"+'  },'

    @property
    def path(self):
        if self.fileName == 'Home': return '/'
        return f'/{self.fileName}'


@dataclass
class NewsPage(Page):
    year: str

    def importer(self):
        return f"import {self.fileName} from '../views/News/{self.year}/{self.fileName}.vue'"

    @property
    def path(self):
        return f'/news/{self.year}/{self.fileName}'


def readViewPages(source:Path):
    """
    viewsフォルダに入っているVueファイル一覧を取得する
    """
    pages = []
    for filePath in source.iterdir():
        if not filePath.is_file(): continue
        pages.append(Page(filePath.stem))

    return pages


def readNewsPages(source:Path):
    """
    Newsフォルダに入っているVueファイル一覧を取得する
    """
    pages = []
    for yearPath in source.iterdir():
        if not yearPath.is_dir():
            continue
        for filePath in yearPath.iterdir():
            pages.append(NewsPage(filePath.stem, yearPath.stem))

    return pages


def creater(viewPages:list[Page], newsPages:list[NewsPage]):
    """
    index.tsのスクリプトを生成する
    """

    firstImport = "import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'\n"

    routers = \
        """

// ページを追加する際にはここに記述する
const routes: Array<RouteRecordRaw> = [
"""

    # view
    viewImports = '\n'.join(map(lambda page: page.importer(), viewPages))
    view = '\n'.join(map(lambda page: page.router(), viewPages))
    
    # news
    newsImports = '\n'.join(map(lambda page: page.importer(), newsPages))
    news = '\n'.join(map(lambda page: page.router(), newsPages))

    end = \
        """
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
"""

    return firstImport+viewImports+'\n'+newsImports + routers+view+'\n'+news + end


if __name__ == "__main__":
    viewPages = readViewPages(Path(__file__).parents[1]/'views')
    newsPages = readNewsPages(Path(__file__).parents[1]/'views'/'News')

    with open(Path(__file__).parent/'index.ts', 'w', encoding='utf-8') as f:
        f.write(creater(viewPages, newsPages))
