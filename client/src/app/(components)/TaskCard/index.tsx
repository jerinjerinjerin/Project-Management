import { Task } from '@/state/api'
import { format } from 'date-fns'
import Image from 'next/image'
import React from 'react'

type Props = {
    task: Task
}

const TaskCard = ({ task }: Props) => {
  return (
    <div className='mb-3 rounded bg-white p-4 shadow dark:bg-dark-secondary dark:text-white'>
      
      {/* Task Information */}
      <p>
        <strong>ID:</strong> {task.id}
      </p>
      <p>
        <strong>Title:</strong> {task.title}
      </p>
      <p>
        <strong>Description:</strong> {task.description || 'No description provided'}
      </p>
      <p>
        <strong>Status:</strong> {task.status}
      </p>
      <p>
        <strong>Priority:</strong> {task.priority}
      </p>
      <p>
        <strong>Tags:</strong> {task.tags || 'No tags'}
      </p>
      <p>
        <strong>Start Date:</strong> {task.startDate ? format(new Date(task.startDate), 'Pp') : 'Not set'}
      </p>
      <p>
        <strong>Due Date:</strong> {task.dueDate ? format(new Date(task.dueDate), 'Pp') : 'Not set'}
      </p>
      <p>
        <strong>Author:</strong> {task.author ? task.author.username : 'Unknown'}
      </p>
      <p>
        <strong>Assignee:</strong> {task.assignee?.username || 'Unassigned'}
      </p>
      
      {/* Attachments */}
      {task.attachments && task.attachments.length > 0 && (
        <div className="mt-4">
          <strong>Attachments:</strong>
          <div className="flex flex-wrap mt-2 gap-2">
            {task.attachments.map((attachment, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={attachment.fileURL.startsWith('/') ? attachment.fileURL : `/${attachment.fileURL}`}
                  alt={attachment.fileName}
                  width={400}
                  height={200}
                  className="rounded-md"
                />
                <p className="text-sm">{attachment.fileName}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default TaskCard
