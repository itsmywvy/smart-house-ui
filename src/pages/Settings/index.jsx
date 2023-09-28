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
import Select from '../../components/common/Select';

const months = [
  { value: '01', name: 'January' },
  { value: '02', name: 'February' },
  { value: '03', name: 'March' },
  { value: '04', name: 'April' },
  { value: '05', name: 'May' },
  { value: '06', name: 'June' },
  { value: '07', name: 'July' },
  { value: '08', name: 'August' },
  { value: '09', name: 'September' },
  { value: '10', name: 'October' },
  { value: '11', name: 'November' },
  { value: '12', name: 'December' },
];

const years = [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33];

const Settings = () => {
  const dispatch = useDispatch();
  const [updateAvatar] = useUpdateAvatarMutation();
  const [paymentData, setPaymentData] = React.useState({});
  const [expiresData, setExpiresData] = React.useState({
    month: '',
    year: null,
  });

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
    console.log(expiresData);
    setPaymentData({ ...data, ...expiresData });
    console.log(paymentData);
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
        <Select
          onChange={(value) => setExpiresData({ ...expiresData, month: value })}
          defaultValue="Months"
          value={expiresData.month}
          optionsList={months}
        />
        <Select
          onChange={(value) => setExpiresData({ ...expiresData, year: value })}
          defaultValue="Years"
          value={expiresData.year}
          optionsList={years}
        />

        <Button type="submit">Save</Button>
      </Form>
    </Layout>
  );
};

export default Settings;
