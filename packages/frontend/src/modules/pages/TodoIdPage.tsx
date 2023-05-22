import React from 'react';
import { useParams } from 'react-router-dom';
import { useFindByIdTodoQuery } from '../todo/hooks/useFindByIdTodoQuery';
import Loader from '../common/components/UI/Loader/Loader';

const TodoIdPage = () => {
  const params = useParams();
  const { data, isLoading } = useFindByIdTodoQuery(params.id as string);
  const todo = data?.data;
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <h1>{todo?.title}</h1>
      <h2>{todo?.description}</h2>
    </div>
  );
};

export default TodoIdPage;
