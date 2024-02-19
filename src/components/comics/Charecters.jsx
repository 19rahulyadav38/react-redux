import React from "react";
import { showCharecters } from "../../features/comics/comicsSlice";
import { useDispatch, useSelector } from "react-redux";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { _getAllCharecters } from "../../services/todo.service";
import { getAllCharecters } from "../../features/comics/comicsSlice";

function Charecters() {

  const dispatch = useDispatch()
  const { entities, loading } = useSelector((state) => state.posts)

  const getChar = ()=>{
    dispatch(getAllCharecters())

  }



  // console.log("getAllCharecters :", )

  return <div>
    <h1>Charecters</h1>
    <button onClick={()=>getChar()}>call api</button>

  </div>;
}

export default Charecters;
