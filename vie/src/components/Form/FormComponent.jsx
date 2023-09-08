import React, { forwardRef } from "react";
import HubspotForm from 'react-hubspot-form'

const FormComponent = ({ bgGray }, ref) => {
  return (
    <div ref={ref}>
            <div className="form-padding">
          <HubspotForm
          portalId='43672585'
          formId='d4c61986-2e45-4e39-b4ee-eee75bf618f7'
          onSubmit={() => console.log('Submit!')}
          onReady={(form) => console.log('Form ready!')}
          loading={<div>Loading...</div>}
          />

        </div>
    </div>
  );
};

export default forwardRef(FormComponent);
