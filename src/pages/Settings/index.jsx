import React from 'react';
import Layout from '../../components/Layout';
import Title from '../../components/common/Title';
import Subtitle from '../../components/common/Subtitle';
import { useGetUserDetailsQuery, useUpdateAvatarMutation } from '../../store/reducers/authSlice';
import PayCard from '../../components/PayCard';
import Input from '../../components/common/Input';
import { useForm } from 'react-hook-form';
import Form from '../../components/Form';
import styles from './Settings.module.scss';
import { useDispatch } from 'react-redux';
import Button from '../../components/common/Button';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const years = [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];

const Settings = () => {
  const dispatch = useDispatch();
  const [updateAvatar] = useUpdateAvatarMutation();
  const [paymentData, setPaymentData] = React.useState(null);

  const { data: user } = useGetUserDetailsQuery();

  const {
    register,
    formState: { errors },
  } = useForm();

  const handleChangeFile = async (e) => {
    await updateAvatar(e.target.files[0]);
  };

  const onSubmitForm = (data) => {
    // dispatch()
    setPaymentData(data);
    console.log(data);
  };

  return (
    <Layout>
      <Title classNames={styles.title}>Settings</Title>
      <div className="wrapper">
        <Subtitle>Change user avatar</Subtitle>
        <input accept="image/*" onChange={handleChangeFile} type="file" />
      </div>
      <Subtitle>Payment Card</Subtitle>
      <PayCard />
      <Form onSubmit={onSubmitForm}>
        <Input
          type="text"
          name="card-number"
          label="CARD NUMBER"
          placeholder="xxxx xxxx xxxx xxxx"
          errors={errors}
          register={register}
          half
          inputmode="numeric"
          autocomplete="cc-number"
          validationSchema={{
            required: true,
            maxLength: 19,
            pattern: '[0-9s]{13,19}',
          }}
        />
        <Input
          type="text"
          name="card-holder"
          label="CARD HOLDER"
          placeholder="Type full name"
          errors={errors}
          register={register}
          half
        />
        <select {...register('month')}>
          <option disabled>MONTH</option>
          {months.map((month) => (
            <option>{month}</option>
          ))}
        </select>

        <select {...register('year')}>
          <option disabled>MONTH</option>
          {years.map((year, i) => (
            <option key={i}>{year}</option>
          ))}
        </select>
        <Button type="submit">Save</Button>
      </Form>
    </Layout>
  );
};

export default Settings;
