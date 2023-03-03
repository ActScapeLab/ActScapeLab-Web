#
# Newsに追加した記事を自動でRouterに追加する
# TODO: News以外の普通のViewsについても自動化
#

from dataclasses import dataclass
from pathlib import Path


@dataclass
class Page:
    year: str
    fileName: str

    def __repr__(self) -> str:
        return self.path

    def importer(self):
        return f"import {self.fileName} from '../views/News/{self.year}/{self.fileName}.vue'"

    def router(self):
        return '  {\n'+f"    path: '{self.path}',\n    component: {self.fileName}\n"+'  },'

    @property
    def path(self):
        return f'/news/{self.year}/{self.fileName.lower()}'


def readPages(source: Path):
    """
    Newsフォルダに入っているVueファイル一覧を取得する
    """
    pages = []
    for yearPath in source.iterdir():
        if not yearPath.is_dir():
            continue
        for filePath in yearPath.iterdir():
            pages.append(Page(yearPath.stem, filePath.stem))

    return pages


def creater(pages: list[Page]):
    """
    index.tsのスクリプトを生成する
    """

    imports = \
        """import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Member from '../views/Member.vue'
import News from '../views/News.vue'
import Publication from '../views/Publication.vue'
import Research from '../views/Research.vue'
import Contact from '../views/Contact.vue'
"""

    routers = \
        """

// ページを追加する際にはここに記述する
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/member',
    name: 'member',
    component: Member
  },
  {
    path: '/news',
    name: 'news',
    component: News
  },
  {
    path: '/publication',
    name: 'publication',
    component: Publication
  },
  {
    path: '/research',
    name: 'research',
    component: Research
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
"""

    newsImports = '\n'.join(map(lambda page: page.importer(), pages))
    news = '\n'.join(map(lambda page: page.router(), pages))

    end = \
        """
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
"""

    return imports + newsImports + routers + news + end


if __name__ == "__main__":
    newsPath: Path = Path(__file__).parents[1]/'views'/'News'

    pages = readPages(newsPath)

    with open(Path(__file__).parent/'index.ts', 'w', encoding='utf-8') as f:
        f.write(creater(pages))
