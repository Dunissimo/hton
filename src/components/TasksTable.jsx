import { Table } from 'antd';
import { useEffect } from 'react';

// Note: в name есть "теги", как фича, 
// можно сделать сортировку по ним, красиво выделять и тд

export const TasksTable = ({projectName, tasks}) => {
  const columns = [
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Приоритет',
      dataIndex: 'priority',
      key: 'priority',
    },
    {
      title: 'Номер',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: 'Имя',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Дата создания',
      dataIndex: 'createdDate',
      key: 'createdDate',
      render: (text) => new Date(text).toLocaleDateString('ru'),
    },
    {
      title: 'Кто создал',
      dataIndex: 'createdAuthor',
      key: 'createdAuthor',
    },
    {
      title: 'Дата изменения',
      dataIndex: 'updatedDate',
      key: 'updatedDate',
      render: (text) => new Date(text).toLocaleDateString('ru'),
    },
    {
      title: 'Кто изменил',
      dataIndex: 'updatedAuthor',
      key: 'updatedAuthor',
    },
    {
      title: 'Описание',
      dataIndex: 'description',
      key: 'description',
      width: '600px',
    },
    {
      title: 'Надзадача',
      dataIndex: 'parentId',
      key: 'parentId',
    },
    {
      title: 'Исполнитель',
      dataIndex: 'executor',
      key: 'executor',
    },
    {
      title: 'Владелец',
      dataIndex: 'owner',
      key: 'owner',
    },
    {
      title: 'Срок',
      dataIndex: 'deadline',
      key: 'deadline',
      render: (text) => text && new Date(text).toLocaleDateString('ru'),
    },
    {
      title: 'Оценка',
      dataIndex: 'estimation',
      key: 'estimation',
    },
    {
      title: 'Спринт',
      dataIndex: 'sprintName',
      key: 'sprintName',
    },
    {
      title: 'Потраченное время',
      dataIndex: 'wastedTime',
      key: 'wastedTime',
    },
    {
      title: 'Рабочая группа',
      dataIndex: 'workGroup',
      key: 'workGroup',
    },
    {
      title: 'Резолюция',
      dataIndex: 'resolution',
      key: 'resolution',
    },
  ];

  useEffect(() => {
    console.log(tasks);
    
  })

  if (!tasks || tasks.length == 0) return;

  // const filteredTasks = tasks?.filter((task) => task.project === projectName);
  
  return (
    <Table
      bordered
      className="w-max max-w-max"
      pagination={false} 
      columns={columns} 
      dataSource={tasks || []}
      rowKey={(record) => record.id} 
    />
  );
}