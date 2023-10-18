import { Cloudinary } from "@cloudinary/url-gen";
import axios from "axios";

export const uploadCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "ml_default");
  formData.append("cloud_name", "dvjapvxtp");
  const { data } = await axios(
    "https://api.cloudinary.com/v1_1/dvjapvxtp/image/upload"
  );
  return { publicId: data?.public_id, url: data?.secure_url };
};
