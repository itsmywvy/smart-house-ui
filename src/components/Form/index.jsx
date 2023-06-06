import React from 'react';
import { useForm } from 'react-hook-form';

import styles from './Form.module.scss';

const Form = ({ onSubmit, children }) => {
  const methods = useForm();
  const { handleSubmit } = methods;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {React.Children.map(children, (child) => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register: methods.register,
                key: child.props.name,
              },
            })
          : child;
      })}
    </form>
  );
};

export default Form;
