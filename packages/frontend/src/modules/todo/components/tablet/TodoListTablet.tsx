import React from 'react';
import { Spinner } from '@chakra-ui/react';
import Slider from 'react-slick';
import { useTodosQuery } from '../../hooks/useTodosQuery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import 'swiper/css';
import { TabletContainer } from './TodoListTablet.styled';
import { TodoItem } from '../todoItem/TodoItem';

export const TodoListTablet = () => {
  const { data, isLoading, isSuccess } = useTodosQuery();
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      }
    ]
  };
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <TabletContainer>
      <Slider {...settings}>
        {isSuccess && data.data.map((todo) => <TodoItem key={todo.id} {...todo} />)}
      </Slider>
    </TabletContainer>
  );
};
