import { Button, Form, Input, Space } from 'antd';
import { useFetcher , useSubmit } from "@remix-run/react";
import { Country, City } from 'country-state-city';
import FormItem from '../Component/Form';
import Mazhab from '../Component/FormMazhab';
import { useState } from 'react';
import { userInfo } from '../data';
import { json } from '@remix-run/node';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const MAZHAB = [
  {name: 'Shafi'},{name: 'Hanafi'},{name: 'Maliki'}, {name: "Hanbali"}
];

const SALAT_METHOD = [{name: 'University of Scinece, Karachi'}]

export const action = async({ request }) => {
  const formData = await request.formData();
  const errors = {};
  const values = Object.fromEntries(formData);
  console.log(values);
  return {
    values,
    errors
  };
  // await userInfo(value);
}

const Index = () => {
  const fetcher = useFetcher();
  const [ country, setCountry ] = useState();
  const [ countryCode, SetCountryCode ] = useState();
  const submit = useSubmit();
  let getAllCountry = Country.getAllCountries();
  const onChangeCountry = (value) => {
    // console.log(value);
        setCountry(value);
        SetCountryCode(() => {
          const selectedCountryCode = getAllCountry.find(
            (e) => e.name === value
          );
          return selectedCountryCode.isoCode; 
        });
  };

  const onFinish = async (values) => {
    // fetcher.submit(values, {
    //   method: "POST"
    // });
    submit(values);
  };
  const onReset = () => {
    // form.resetFields();
  };

  const data = fetcher.data;
  if (data) {
    console.log('submitted data', data);
  }

  return (
      <div className='setting'>

        <Form
          {...layout}
          name="control-hooks"
          onFinish={onFinish}
          // method="post"
          style={{
            maxWidth: 600,
          }}
          // action='/'
        >
          <Form.Item
            name="name"
            label="Name"
        >
            <Input placeholder='Your Name'/>
        </Form.Item>
          <FormItem name="country" label="Country" onChange={onChangeCountry} placeholder="Select Your Country" options={getAllCountry}/>
          <FormItem name="city" label="City" placeholder="Select Your City" options={City.getCitiesOfCountry(countryCode)}/>
          <Mazhab name="mazhab" label="Mazhab" placeholder="Select Your Mazhab" options={MAZHAB}/>
          <Mazhab name="salat_method" label="Salat Time Calculation Methods" placeholder="Select Your City Salat Time Calculation Methods" options={SALAT_METHOD}/>
          <Form.Item {...tailLayout}>
            <Space>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              
              <Button htmlType="button" onClick={onReset}>
                Reset
              </Button>
            </Space>
          </Form.Item>
        </Form>
      
    </div>
  );
};
export default Index;