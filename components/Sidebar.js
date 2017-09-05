import React from 'react';
import PreviousTags from './PreviousTags';

const Sidebar = () => (
  <div className="col-md-3">
    <div>
      <form method="post" action="/tag">
        <div className="input-group">
          <div className="input-group-sub">
            <input className="form-control" name="name" type="text" placeholder="search hashtags..." />
            <div className="input-group-addon">
              <button type="submit">&#x1F50D;</button>
            </div>
          </div>
          <div className="invalid-feedback">Only letters are allowed...</div>
        </div>
      </form>
    </div>
    <PreviousTags />
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

export default Sidebar;
