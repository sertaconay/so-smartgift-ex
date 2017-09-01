import React from 'react';

const Sidebar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const targetEl = e.target;
    const targetElTagValue = targetEl.tag.value;
    targetEl.setAttribute('action', `/tag/${targetElTagValue}`);
    if (!targetElTagValue.length || !targetElTagValue.match(/[a-z]/yg)) {
      return targetEl.tag.parentElement.classList.add('is-invalid');
    }
    return targetEl.submit();
  };

  return (
    <div className="col-md-3">
      <form method="post" onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-sub">
            <input className="form-control" name="tag" type="text" placeholder="search hashtags..." />
            <div className="input-group-addon">
              <button type="submit">&#x1F50D;</button>
            </div>
          </div>
          <div className="invalid-feedback">Only letters are allowed...</div>
        </div>
      </form>
      <style jsx>
        {`
        button {
          background: none;
          border: none;
          cursor: pointer;
          display: block;
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0 15px;
        }
        .is-invalid ~ .invalid-feedback {
          display: block;
        }
        .is-invalid .input-group-addon,
        .is-invalid .form-control {
          border-color: red;
        }
        .input-group {
          flex-direction: column;
        }
        .input-group-sub {
          display: flex;
        }
        .input-group-addon {
          padding: 0;
        }
      `}
      </style>
    </div>
  );
};

export default Sidebar;
