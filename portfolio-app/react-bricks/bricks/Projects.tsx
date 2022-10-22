import React, { Children } from 'react'
import { Text, RichText, Image,Repeater, types } from 'react-bricks/frontend'

//=============================
// Local Types
//=============================
type Padding = 'big' | 'small'

interface ProjectsProps {
    paddingY: number
    bgColor: types.IColor
  
}

//=============================
// Component to be rendered
//=============================
const Projects: types.Brick<ProjectsProps> = ({paddingY, bgColor}) => {
  return(
    <div
          className={`max-w-5xl mx-auto px-4 py-6 ${bgColor?.className}`} style={{ paddingTop: `${paddingY}rem`, paddingBottom: `${paddingY}rem`}} >
          <Text

              propName="title"
              placeholder="Title..."
              renderBlock={({ children }) => (
                  <h1 className="text-5xl text-info text-center mb-4 items-center font-black pb-1 bg-clip-text bg-gradient-to-r text-gray-800 dark:text-gray-100 from blue-500 to-teal-400 "
                  >
                      {children}
                  </h1>
              )} />
                   

              <div className="flex flex-col justify-content-center items-center sm:flex-row flex-wrap">
              <Repeater propName="projects" />
          </div>
        
    </div>
  )
}

//=============================
// Brick Schema
//=============================
Projects.schema = {
  name: 'projects-ws',
  label: 'Projects',
  category: 'Workshop',
  tags: ['projects'],
  repeaterItems: [{
    name: 'projects',
    itemType: 'project-list-ws',
    itemLabel: 'Projects',
    max:20,
}],
  getDefaultProps: () => ({ 
    title: 'My Project'
  }),
  sideEditProps: [
    {
        name: 'paddingY',
        label: 'Vertical padding',
        type: types.SideEditPropType.Range,
        rangeOptions: {
            min:0,
            max: 4,
            step:1,
        },

    },
    {
        name:'bgColor',
        label:'Background',
        type: types.SideEditPropType.Select,
        selectOptions: {
            display: types.OptionsDisplay.Color,
            options: [
                {value: {color: '#fff', className: 'bg-white'}, label: 'White'},
                {value: {color: '#f7fee7', className: 'bg-blue-50'}, label: 'Light Blue'}
            ]
        },
    },
    
      
  ],
}

export default Projects
