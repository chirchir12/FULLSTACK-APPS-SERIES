import React, { useState, useContext } from 'react';
import Input from '../shared/Input/Input';
import TextArea from '../shared/Input/TextArea';
import { useToasts } from 'react-toast-notifications';
import { JobContext } from '../../context/JobContext';

function Create(props) {
  const { setjobs } = useContext(JobContext);
  const { addToast } = useToasts();
  const [createjob, setCreateJob] = useState({});
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const postData = () => {
    setIsLoading(true);
    return fetch('http://localhost:5000/api/jobs/create', {
      method: 'Post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(createjob),
    })
      .then((res) => {
        if (!res.ok) {
          console.log(res);
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then((results) => {
        setjobs(results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (error.name === 'TypeError') {
          console.log('Network failure');
          setError({ message: 'Network failures' });
          console.log(error);
        }
        setError({ error: true });
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setCreateJob({ ...createjob, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
    console.log('my fucked submit', error);
    if (error) {
      console.log(error);
    } else {
      if (!isLoading) {
        addToast('Job Entry has been added', {
          appearance: 'success',
          autoDismiss: true,
        });
        setCreateJob({});
      }
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
