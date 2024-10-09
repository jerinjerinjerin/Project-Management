"use client";

import React, { useState } from 'react'
import ProjectHeader from '@/app/projects/ProjectHeader';
import Board from '../BordView';
import List from '../ListView';
import TimeLine from '../TimelineView';
import Table from '../TableView';
import ModelNewTask from '@/app/(components)/ModelNewTask';

type Props = {
    params: {id: string}
}

const Project = ({ params}: Props) => {

    const {id} = params;
    const [activeTab, setActiveTab] = useState('Board');
    const [isModelNewTaskOpen, setIsModelNewTaskOpen] = useState(false);

  return (
    <div>
        <ModelNewTask
          isOpen={isModelNewTaskOpen}
          onClose={() => setIsModelNewTaskOpen(false)}
          id={id}
        />
        {/* MODEL NEW TASK */}
        <ProjectHeader
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
        />

        {
            activeTab === "Board" && (
                <Board
                 id={id}
                 setIsModelNewTaskOpen={setIsModelNewTaskOpen}
                />
            )
        }
        {
            activeTab === "List" && (
                <List
                 id={id}
                 setIsModelNewTaskOpen={setIsModelNewTaskOpen}
                />
            )
        }
        {
            activeTab === "Timeline" && (
                <TimeLine
                 id={id}
                 setIsModelNewTaskOpen={setIsModelNewTaskOpen}
                />
            )
        }
         {
            activeTab === "Table" && (
                <Table
                 id={id}
                 setIsModelNewTaskOpen={setIsModelNewTaskOpen}
                />
            )
        }
    </div>
  )
}

export default Project