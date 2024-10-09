import Header from "@/app/(components)/Header";
import TaskCard from "@/app/(components)/TaskCard";
import { Task, useGetTasksQuery } from "@/state/api";
import React from "react";

type Props = {
  id: string;
  setIsModelNewTaskOpen: (isOpen: boolean) => void;
};

const ListView = ({ id, setIsModelNewTaskOpen }: Props) => {
  const {
    data: tasks,
    error,
    isLoading,
  } = useGetTasksQuery({ projectId: Number(id) });

  if (isLoading) return <div className="">Loading</div>

  if(error) return <div className="">An error occurred while fetching tasks</div>

  return <div className="px-4 pb-8 xl:px-6">
    <div className="pt-5">
      <Header name="List"
        buttonComponent={
          <button className="flex items-center bg-blue-primary
            px-3 py-2 rounder text-white hover:bg-blue-600"
            onClick={() => setIsModelNewTaskOpen(true) }
          >
            Add Task
          </button>
        }
        isSmallText
      />
    </div>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2
    lg:grid-cols-3 lg:gap-6">
      {tasks?.map((task: Task) => <TaskCard key={task.id} task={task}/>)}
    </div>
  </div>;
};

export default ListView;
