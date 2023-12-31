import { useState } from "react";
import {
  Button,
  Input,
  Form,
  Upload,
  message as antdMessage,
  Spin,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import BlogApi from "../Components/API/BlogApi";

const { TextArea } = Input;

function Blogs() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [uploading, setUploading] = useState(false);
  
  const handleSubmit = async () => {
    try {
      const response = await BlogApi.create(
        {
          title,
          content,
          image: image.url,
        }
      );

      console.log("Blog saved:", response.data);
      antdMessage.success("Blog saved successfully");
    } catch (error) {
      console.error("Error saving blog:", error);
      antdMessage.error("Error saving blog");
    }
  };

  const handleImageUpload = async (e) => {
    setIsImageUploaded(false);
    setUploading(true);
    try {
      const file = e.target.files[0];
        console.log('image data =', file);

        if(!file)
            return console.log('image not exists.. choose image to upload.')
        
        if(file.size > 5 * 1024 * 1024)
                return console.log('File size must be less than 5Mb')
      let formData = new FormData();
      formData.append("profile", file);

      const response = await axios.post(
        `https://arintractor.onrender.com/api/v1/image/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          },
        }
      );
      setImage(response.data.result);
      setIsImageUploaded(true);
      // antdMessage.success("Image uploaded successfully");
    } catch (error) {
      console.error("Image upload error:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={{ padding: "20px", width: "350px", backgroundColor: "lightblue" , margin: "50px auto"}}>
      <h1 style={{textAlign: "center"}}>Add a New Blog</h1>
      <Form layout="vertical">
        <Form.Item label="Title">
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Item>
        <Form.Item label="Content">
          <TextArea
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Cover Photo">
          {/* <Upload beforeUpload={handleImageUpload} showUploadList={false}>

            <Button icon={<UploadOutlined />}>{image ? "Image Uploaded" : "Upload Cover Photo"}</Button>
          </Upload> */}
          {/* <Upload 
          beforeUpload={handleImageUpload} 
          showUploadList={false}>
            {uploading ? (
              <Spin spinning={uploading}>
                <Button icon={<UploadOutlined />}>
                  {isImageUploaded ? "Image Uploaded" : "Uploading..."}
                </Button>
              </Spin>
            ) : (
              <Button icon={<UploadOutlined />}>
                {isImageUploaded ? "Image Uploaded" : "Upload Cover Photo"}
              </Button>
            )}
          </Upload> */}
          <Input type="file" name="image"
          id="image" onChange={handleImageUpload}
            />
        </Form.Item>
        {isImageUploaded && (
          <p style={{ color: "green" }}>Image uploaded successfully</p>
        )}
        <Form.Item>
          <Button
            type="primary"
            onClick={handleSubmit}
            disabled={!isImageUploaded}
          >
            Save Blog
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Blogs;

