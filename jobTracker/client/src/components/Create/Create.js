import React from 'react';
import Input from '../shared/Input/Input';

function Create(props) {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col 12 col-md-6 mx-auto">
          <h1 className="h4 text-center">Create Job Entry</h1>
          <div className="dropdown-divider"></div>
          <form className="mt-4">
            <Input
              label="Job Title"
              type="text"
              name="title"
              id="title"
              value="chirchir"
            />
            <Input
              label="Company Name"
              type="text"
              name="company"
              id="company"
              value="company"
            />
            <Input
              label="Site"
              type="text"
              name="site"
              id="site"
              value="Indded"
              smallText="where did you hear this job?"
            />
            <Input
              label="Link to Site"
              type="url"
              name="link"
              id="link"
              value=""
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
