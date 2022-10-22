import { types } from 'react-bricks/frontend'
import website from 'react-bricks-ui/website'
import blog from 'react-bricks-ui/blog'
import HeroUnit from './MyHeroUnit'
import Projects from './Projects'
import ProjectList from './ProjectList'


const bricks: types.Brick<any>[] = [
  ...website, // React Bricks UI
  ...blog,
  HeroUnit, // Example custom brick
  Projects,
  ProjectList,
  // Put here your other bricks...
]

export default bricks
