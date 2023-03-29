#
# Newsに追加した記事を自動でRouterに追加する
#

from dataclasses import dataclass, field
from pathlib import Path
from typing import ClassVar

@dataclass
class BasePage:
    importName:str
    importPath:str
    routePath:str
    spaceCount:ClassVar[int] = 0

    def __repr__(self) -> str:
        return self.routePath

    def importer(self):
        return f"import {self.importName} from '{self.importPath}'"

    def router(self):
        return self.baseSpaces+'  {\n'+self.baseSpaces+f"    path: '{self.routePath}',\n{self.baseSpaces}    component: {self.importName}\n"+self.baseSpaces+'  },'
    
    def setSpaceCount(self, count:int):
        self.spaceCount = count
        return self

    @property
    def baseSpaces(self):
        return ' ' * self.spaceCount

@dataclass
class Page(BasePage):
    fileName:str
    importName:str = field(init=False)
    importPath:str = field(init=False)
    routePath:str  = field(init=False)

    def __post_init__(self) -> None:
        self.importName = self.fileName
        self.importPath = f'../views/{self.fileName}.vue'
        self.routePath  = self.path

    @property
    def path(self):
        if self.fileName == 'Home': return '/'
        return f'/{self.fileName}'


@dataclass
class ChildPage(Page):
    parentName:str

    def __post_init__(self) -> None:
        super().__post_init__()
        self.importPath = f'../views/{self.parentName}/{self.fileName}.vue'

    @property
    def path(self):
        return self.fileName


@dataclass
class NewsPage(ChildPage):
    parentName:str = field(default='News', init=False)
    year: str

    def __post_init__(self) -> None:
        super().__post_init__()
        self.importPath = f'../views/News/{self.year}/{self.fileName}.vue'

    @property
    def path(self):
        return f'{self.year}/{self.fileName}'

@dataclass
class MemberPage(ChildPage):
    parentName:str = field(default='Member', init=False)
    kinds: str

    def __post_init__(self) -> None:
        super().__post_init__()
        self.importPath = f'../views/Member/{self.kinds}/{self.fileName}.vue'

    @property
    def path(self):
        return f'{self.kinds}/{self.fileName}'


@dataclass
class ParentPage(Page):
    childPages: list[ChildPage]
    basePage: BasePage

    def __post_init__(self) -> None:
        super().__post_init__()
        self.childPages.insert(0, self.basePage)

    def importer(self):
        parent = super().importer()
        children = '\n'.join(map(lambda child: child.importer(), self.childPages))
        return parent + '\n' + children

    def router(self):
        first = '  {\n'+f"    path: '{self.path}',\n    component: {self.fileName},\n"
        childrenTop = '    children: [\n'
        children = '\n'.join(map(lambda cp: cp.setSpaceCount(4).router(), self.childPages))
        childrenEnd = '\n    ]\n  },'
        return first+childrenTop+children+childrenEnd


def readViewPages(source:Path):
    """
    viewsフォルダに入っているVueファイル一覧を取得する
    """
    pages:dict[str, Page] = {}
    for filePath in source.iterdir():
        if not filePath.is_file(): continue
        if filePath.suffix != '.vue': continue
        pages[filePath.stem] = Page(filePath.stem)

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

def readMemberPages(source:Path):
    """
    Memberフォルダに入っているVueファイル一覧を取得する
    """
    pages = []
    for yearPath in source.iterdir():
        if not yearPath.is_dir():
            continue
        for filePath in yearPath.iterdir():
            pages.append(MemberPage(filePath.stem, yearPath.stem))

    return pages


def creater(viewPages:dict[str, Page]):
    """
    index.tsのスクリプトを生成する
    """

    firstImport = "import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'\n"
    routerHead = '\n\nconst routes: Array<RouteRecordRaw> = [\n'

    # view
    pages = list(viewPages.values())
    viewImports = '\n'.join(map(lambda page: page.importer(), pages))
    view = '\n'.join(map(lambda page: page.router(), pages))

    end = \
        """
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
"""

    return firstImport+viewImports + routerHead+view + end


if __name__ == "__main__":
    # route pagesの読み込み
    viewPages = readViewPages(Path(__file__).parents[1]/'views')
    # print(viewPages)
    # print()

    # newsにChild要素を追加する
    newsBasePage = BasePage('NewsTop', f'../views/News/Top.vue', '')
    newsPages = readNewsPages(Path(__file__).parents[1]/'views'/'News')
    viewPages['News'] = ParentPage(viewPages['News'].fileName, newsPages, newsBasePage)
    # print(f'変更後 {viewPages}')
    # print()
    
    # memberにChild要素を追加する
    newsBasePage = BasePage('MemberTop', f'../views/Member/Top.vue', '')
    newsPages = readMemberPages(Path(__file__).parents[1]/'views'/'Member')
    viewPages['Member'] = ParentPage(viewPages['Member'].fileName, newsPages, newsBasePage)
    
    # index.tsへ書き出し
    with open(Path(__file__).parent/'index.ts', 'w', encoding='utf-8') as f:
        f.write(creater(viewPages))
