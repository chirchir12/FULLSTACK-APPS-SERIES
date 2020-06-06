import React, { useState, useEffect } from 'react';
import Input from '../shared/Input/Input';
import TextArea from '../shared/Input/TextArea';
import Error from '../shared/Error/Error';
import Error404 from '../shared/Error404/Error404';
import { useToasts } from 'react-toast-notifications';

function Edit(props) {
  const { addToast } = useToasts();
  const { id } = props.match.params;
  const [Updatejob, setUpdateJob] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // fetching record
  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:5000/api/jobs/single/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }

        return res;
      })
      .then((response) => {
        return response.json();
      })
      .then((results) => {
        setUpdateJob(results);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, [id]);

  // updating record
  const PutData = () => {
    setIsLoading(true);
    fetch(`http://localhost:5000/api/jobs/update/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Updatejob),
    })
      .then((res) => {
        if (!res.ok) {
          console.log('the res is ', res);
          throw Error('Network is unstable');
        }
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const handleChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    setUpdateJob({
      ...Updatejob,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Updatejob);
    PutData();
    if (!isLoading && !error) {
      addToast('Job Entry has been updated', {
        appearance: 'success',
        autoDismiss: true,
      });
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } else if (error) {
      addToast('Error could not update the entry', {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  };

  if (error) {
    return <Error404 />;
  }

  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col 12 col-md-7 mx-auto">
            <h1 className="h4 text-center">Update</h1>
            <div className="dropdown-divider"></div>
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="row">
                <div className="col-12 col-md-6">
                  <Input
                    label="Job Title"
                    type="text"
                    onChange={handleChange}
                    name="title"
                    id="title"
                    value={Updatejob.title || ''}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <Input
                    label="Company Name"
                    type="text"
                    onChange={handleChange}
                    name="company"
                    id="company"
                    value={Updatejob.company || ''}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <Input
                    label="Link to Site"
                    type="url"
                    onChange={handleChange}
                    name="link"
                    id="link"
                    value={Updatejob.link || ''}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <Input
                    label="Site"
                    type="text"
                    onChange={handleChange}
                    name="site"
                    id="site"
                    value={Updatejob.site || ''}
                    smallText="where did you hear this job?"
                  />
                </div>
              </div>
              <TextArea
                label="Responsibility"
                onChange={handleChange}
                value={Updatejob.responsibility || ''}
                name="responsibility"
                id="responsibilitt"
                rows="4"
              />
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  onChange={handleChange}
                  name="response"
                  className="form-check-input"
                  id="exampleCheck1"
                  value={Updatejob.response}
                  checked={Updatejob.response ? true : false}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Responded Yet ?
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edit;
