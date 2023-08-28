import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Accordion, Button } from "react-bootstrap";
import "./EmplpymentStyle.css";

const ArmayPerson = () => {
  const value = {
    defaultValues: {
      BANo2: "abcd",
      Trade: "www",
      Course: "cse",
    },
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(value);
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Employment History(For Retired ArmayPerson)
          </Accordion.Header>
          <Accordion.Body>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="ArmayPerson">
                <div className="ArmayPersonLeft">
                  <div className="BANo">
                    <div className="BaNo1">
                      <label>BA No*</label>
                      <select {...register("BANo")}>
                        <option value="BA">BA</option>
                        <option value="BSS">BSS</option>
                        <option value="NO">No</option>
                        <option value="BSP">BSP</option>
                      </select>
                    </div>
                    <div className="BANo2">
                      <label>BA No*</label>
                      <br></br>
                      <input
                        {...register("BANo2", {
                          required: "input field is required",
                        })}
                        type="text"
                      />
                      <p>{errors.BANo2?.message}</p>
                      <br></br>
                    </div>
                  </div>

                  <div className="Type">
                    <label>Type*</label>
                    <select {...register("Type")}>
                      <option value="BA">Officer</option>
                      <option value="BSS">JCO</option>
                      <option value="NO">NCO</option>
                    </select>
                  </div>
                  <br></br>
                  <div className="Trade">
                    <label>Trade</label>
                    <br></br>
                    <input
                      {...register("Trade", {
                        required: "input field is required",
                      })}
                      type="text"
                    />
                    <p>{errors.Trade?.message}</p>
                  </div>
                  <br></br>
                  <div className="DateCommission">
                    <label>Date of Commission</label>
                    <br></br>
                    <input {...register("DateCommission")} type="date" />
                  </div>
                </div>
                <br></br>
                <br></br>
                <div className="ArmayPersonRight">
                  <div className="Ranks">
                    <label>Ranks*</label>
                    <br></br>
                    <select {...register("Ranks")}>
                      <option value="2LT">2LT</option>
                      <option value="LT">LT</option>
                      <option value="COOL">COOL</option>
                    </select>
                  </div>
                  <br></br>
                  <div className="Arms">
                    <label>Arms*</label>
                    <select {...register("Arms")}>
                      <option value="Signs">Sigs</option>
                      <option value="Ord">Ord</option>
                      <option value="AMC">AMC</option>
                    </select>
                  </div>
                  <br></br>
                  <div className="Course">
                    <label>Course</label>
                    <br></br>
                    <input
                      {...register("Course", {
                        required: "input field is required",
                      })}
                      type="text"
                    />
                    <p>{errors.Course?.message}</p>
                  </div>
                  <br></br>
                  <div className="DateRetirement">
                    <label>Date of Retirement*</label>
                    <br></br>
                    <input {...register("DateRetirement")} type="date" />
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <button>Submit</button>
            </form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};

export default ArmayPerson;
