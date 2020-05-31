import React from 'react';
import Input from '../shared/Input/Input';
import TextArea from '../shared/Input/TextArea';

function Create(props) {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col 12 col-md-8 mx-auto">
          <h1 className="h4 text-center">Create Job Entry</h1>
          <div className="dropdown-divider"></div>
          <form className="mt-4">
            <div className="row">
              <div className="col-12 col-md-6">
                <Input
                  label="Job Title"
                  type="text"
                  name="title"
                  id="title"
                  value="chirchir"
                />
              </div>
              <div className="col-12 col-md-6">
                <Input
                  label="Company Name"
                  type="text"
                  name="company"
                  id="company"
                  value="company"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <Input
                  label="Link to Site"
                  type="url"
                  name="link"
                  id="link"
                  value=""
                />
              </div>
              <div className="col-12 col-md-6">
                <Input
                  label="Site"
                  type="text"
                  name="site"
                  id="site"
                  value="Indded"
                  smallText="where did you hear this job?"
                />
              </div>
            </div>
            <TextArea
              label="Responsibility"
              value=""
              name="responsibility"
              id="responsibilitt"
              rows="4"
            />
            <button type="submit" class="btn btn-primary">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
