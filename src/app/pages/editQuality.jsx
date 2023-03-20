import React from "react";
import { useParams } from "react-router";
// import { toast } from "react-toastify";
import QualityForm from "./qualityForm";
// import qualityService from "../services/quality.service";
import { useQualities } from "../components/hooks/useQualities";

const EditQualityPage = () => {
  const id = useParams().id;
  const { getQuality, updateQuality } = useQualities();
  const quality = getQuality(id);

  console.log("id", id);
  console.log("q", quality);

  const handeleSubmit = (data) => {
    updateQuality(data);
  };

  return (
    <>
      <h1>Edit Quality Page</h1>{" "}
      <QualityForm data={quality} onSubmit={handeleSubmit} />
    </>
  );
};

export default EditQualityPage;
