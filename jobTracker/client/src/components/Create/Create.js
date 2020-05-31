import React, { useState, useContext } from 'react';
import Input from '../shared/Input/Input';
import TextArea from '../shared/Input/TextArea';
import { useToasts } from 'react-toast-notifications';
import { JobContext } from '../../context/JobContext';

function Create(props) {
  const { fetchData } = useContext(JobContext);
  const { addToast } = useToasts();
  const [createjob, setCreateJob] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const postData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/jobs/create', {
        method: 'Post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(createjob),
      });
      if (!res.ok) {
        throw new Error('Network is unstable');
      }
      setIsLoading(false);
    } catch (error) {
      setError({
        ...error,
        message: 'We are experiencing trouble reaching server',
      });
    }
  };
  const handleChange = (e) => {
    setCreateJob({ ...createjob, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(createjob);
    postData();
    fetchData();
    if (!isLoading && !error) {
      addToast('Job Entry has been added', {
        appearance: 'success',
        autoDismiss: true,
      });
      setCreateJob({});
    } else if (error) {
    }
  };

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col 12 col-md-7 mx-auto">
          <h1 className="h4 text-center">Create Job Entry</h1>
          <div className="dropdown-divider"></div>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="row">
              <div className="col-12 col-md-6">
                <Input
                  label="Job Title"
                  type="text"
                  name="title"
                  id="title"
                  onChange={handleChange}
                  value={createjob.title || ''}
                />
              </div>
              <div className="col-12 col-md-6">
                <Input
                  label="Company Name"
                  type="text"
                  name="company"
                  id="company"
                  onChange={handleChange}
                  value={createjob.company || ''}
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
                  onChange={handleChange}
                  value={createjob.link || ''}
                />
              </div>
              <div className="col-12 col-md-6">
                <Input
                  label="Site"
                  type="text"
                  name="site"
                  id="site"
                  onChange={handleChange}
                  value={createjob.site || ''}
                  smallText="where did you hear this job?"
                />
              </div>
            </div>
            <TextArea
              label="Responsibility"
              value={createjob.responsibility || ''}
              name="responsibility"
              onChange={handleChange}
              id="responsibilitt"
              rows="4"
            />
            <button type="submit" className="btn btn-primary">
              {isLoading ? 'loading..' : 'Create'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
