import React, { Children } from 'react'
import { Text, RichText, Image, types } from 'react-bricks/frontend'
import {FaGithub, FaRocket} from 'react-icons/fa'
//=============================
// Local Types
//=============================
type Padding = 'big' | 'small'

interface ProjectListProps {
    githubUrl: string
    deployedUrl: string
  
}

//=============================
// Component to be rendered
//=============================
const ProjectList: types.Brick<ProjectListProps> = ({githubUrl, deployedUrl}) => {
  return(
    <div className="p-6 w-1/3">
    <Image
    propName="photo"
    alt="Assignments"
    maxWidth={300}
    containerClassName="mb-6 flex justify-center items-center"
    imageClassName="w-56 border"
    />
    <Text
    propName="name"
    placeholder="Name..."
    renderBlock={({children}) => (
        <h2 className="text-center text-xl font-bold text-gray-900">{children}</h2>
    )}
    />
    <Text
    propName="description"
    placeholder="Description..."
    renderBlock = {({children}) => (
        <h3 className="text-center text-lg text-blue-600">{children}</h3>
    )}
    />

    {(githubUrl || deployedUrl) && (

    <div className="flex justify-center space-x-4 text-xl mt-2">
        {githubUrl && ( 
            <a href={githubUrl} className="text-gray-400 hover:text-gray-500">
                <FaGithub/>
            </a>
        )}
        {deployedUrl && ( 
            <a href={deployedUrl} className="text-gray-400 hover:text-gray-500">
                <FaRocket/>
            </a>
        )}
    </div>
    )}
    
    </div>


    
  )
}

//=============================
// Brick Schema
//=============================
ProjectList.schema = {
  name: 'project-list-ws',
  label: 'Project List',
  category: 'Workshop',
  tags: ['projects', 'project list'],
  getDefaultProps: () => ({ 
    name:'Challenge 1',
    githubUrl: '',
    deployedUrl: ''
  }),
  sideEditProps: [
    {
        name: 'githubUrl',
        label: 'Github URL',
        type: types.SideEditPropType.Text,
        validate: (value) => !value || value.startsWith('https') || 'Invalid URL',
    },
    {
        name: 'deployedUrl',
        label: 'Deployed URL',
        type: types.SideEditPropType.Text,
    },
    
      
  ],
}

export default ProjectList
