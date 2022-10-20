import React from 'react'
import WestIcon from '@mui/icons-material/West';
import { CreateBtn } from '../../../../Buttons';
import '../../All.css'

const Permission = (props) => {
  return (
    <div>
       <div className="flex">
       <WestIcon className="backButton" onClick={() => props.setCheckPermission(false)} />

                    <h1 className="text-base text-bold mb-0 ml-5">
                      Permissions
                    </h1>
                    <div className="mr-5"></div>
                  </div>

                  <div className="row mt-5">
                    <div className="col-lg-6">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Company
                      </p>
                      <div className="slct">
                        <select
                          class="form-select form-select-lg mb-0 w-100"
                          aria-label=".form-select-lg example"
                        >
                          <option selected>Select your option</option>
                          <option value="1">Experts</option>
                          <option value="2">Clerks</option>
                          <option value="3">Company Admin</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                        Role
                      </p>
                      <div className="slct">
                        <select
                          class="form-select form-select-lg mb-0 w-100"
                          aria-label=".form-select-lg example"
                        >
                          <option selected>Select your option</option>
                          <option value="1">Experts</option>
                          <option value="2">Clerks</option>
                          <option value="3">Company Admin</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="generl mt-5">
                    <p>General</p>
                  </div>

                  <div className="row">
                    <div className="col-lg-3">
                      <div class="form-check mt-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Administrator
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div class="form-check mt-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Sachverstandiger
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div class="form-check mt-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Sachbearbeiter
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div class="form-check mt-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Change Location
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="generl mt-5">
                    <p>Vehicle Management</p>
                  </div>

                  <div className="row">
                    <div className="col-lg-3">
                      <div class="form-check mt-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Read
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div class="form-check mt-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Create
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div class="form-check mt-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Edit
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div class="form-check mt-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Delete
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="generl mt-5">
                    <p>Manage Addresses</p>
                  </div>

                  <div className="row">
                    <div className="col-lg-3">
                      <div class="form-check mt-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Read
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div class="form-check mt-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Create
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div class="form-check mt-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Edit
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div class="form-check mt-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Delete
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="generl mt-5">
                    <p>Dossier</p>
                  </div>

                  <div className="row">
                    <div className="col-lg-3">
                      <div class="form-check mt-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Read
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div class="form-check mt-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Create
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div class="form-check mt-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Edit
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div class="form-check mt-4">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Delete
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="generl mt-5">
                    <p>Protocol / Logging</p>
                  </div>

                  <div className="col-lg-3">
                    <div class="form-check mt-4">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Read
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-between my-6 mt-5">

          <CreateBtn
            
            style={{
              color: "gray",
              padding: "6px 22px",
              diplay: "flex",
              alignItems: "center",
            }}
            name="Previous"
          />
          <div className="mr-5">
            <CreateBtn
              
              style={{
                color: "#000",
                padding: "6px 22px",
                diplay: "flex",
                alignItems: "center",
              }}
              name="Next"
            />
          </div>
                    </div>
    </div>
  )
}

export default Permission
