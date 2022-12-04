import React, { useState } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const styleDelete = {
  height: "40px",
  width: "50px",
};
const BCard = ({
  category_now,
  headline_now,
  description_now,
  type_now,
  current,
  id,
  handleDelete,
}) => {
  const color = ["#36d7b7", "#0cb1f7", "#878fda"];
  const handleUpdate = async () => {
    try {
      console.log("yes entered");
      const response = await axios.put("/api/modify", {
        type,
        category,
        headline,
        description,
        id,
      });

      if (response.data.success === true) {
        alert("Content successfully saved");
      }
      setOpen(false);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [type, settype] = useState(type_now);
  const [category, setcategory] = useState("");
  const [headline, setheadline] = useState("");
  const [description, setdescription] = useState("");

  return (
    <>
      <div className="container">
        <div className="card">
          <div class="card" style={{ backgroundColor: color[current % 3] }}>
            <div class="card-body">
              <h5 class="card-title">category : {category_now}</h5>
              <br />
              <h6 class="card-subtitle mb-2 text-muted">
                headline : {headline_now}
              </h6>
              <br />

              <p>
                <ArrowRightIcon />: {description_now}
              </p>
            </div>
            <div className="d-flex justify-content-around">
              <div
                onClick={() => {
                  console.log(id);
                  handleDelete(id);
                }}
                className="btn btn-danger"
                style={styleDelete}
              >
                <DeleteIcon />
              </div>
              <div>
                <div onClick={handleOpen} className="btn btn-primary">
                  <BorderColorIcon />
                  {/* update */}
                </div>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Update Content
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <form>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Category</label>
                          <input
                            value={category}
                            onChange={(e) => setcategory(e.target.value)}
                            type="email"
                            class="form-control"
                            placeholder="Enter category"
                          />
                        </div>
                        <div class="form-group">
                          <label for="exampleInputPassword1">Headline</label>
                          <input
                            value={headline}
                            onChange={(e) => setheadline(e.target.value)}
                            type="text"
                            class="form-control"
                            placeholder="Enter title"
                          />
                        </div>
                        <div class="form-group">
                          <label for="exampleInputPassword1">Description</label>
                          <textarea
                            value={description}
                            onChange={(e) => setdescription(e.target.value)}
                            type="text"
                            class="form-control"
                            placeholder="Enter description"
                          />
                        </div>

                        <button
                          onClick={() => handleUpdate()}
                          type="button"
                          class="btn mt-2 btn-primary"
                        >
                          Update
                        </button>
                      </form>
                    </Typography>
                  </Box>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BCard;
