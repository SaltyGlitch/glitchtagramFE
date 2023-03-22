import React, {useState, ChangeEvent} from "react";

// interface PictureProp {
//     description: string;
//     uploadedAt: Date;
//     Likes: number;
// }

const FileUploadSingle = () => {
    const [file, setFile] = useState<File>();

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleUploadClick = () => {
        if (!file) {
            return;
        }

        // 👇 Uploading the file using the fetch API to the server
        fetch('https://glitchtagramcli.azurewebsites.net/Pictures/uploadImage', {
            method: 'POST',
            body: file,
            // 👇 Set headers manually for single file upload
            headers: {
                'content-type': file.type,
                'content-length': `${file.size}`, // 👈 Headers need to be a string
            },
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.error(err));
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange}/>

            <div>{file && `${file.name} - ${file.type}`}</div>

            <button onClick={handleUploadClick}>Upload</button>
        </div>
    );
}
export default FileUploadSingle;