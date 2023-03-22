import React, {useState, ChangeEvent, FormEvent} from "react";

// interface PictureProp {
//     description: string;
//     uploadedAt: Date;
//     Likes: number;
// }

const FileUploadSingle = () => {
    // const [file, setFile] = useState<File>();
    //
    // const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.files) {
    //         setFile(e.target.files[0]);
    //     }
    // };
    //
    // const handleUploadClick = () => {
    //     if (!file) {
    //         return;
    //     }
    //
    //     // 👇 Uploading the file using the fetch API to the server
    //     fetch('https://glitchtagramcli.azurewebsites.net/Pictures/uploadImage', {
    //         method: 'POST',
    //         body: file,
    //         // 👇 Set headers manually for single file upload
    //         headers: {
    //             'content-type': file.type,
    //             'content-length': `${file.size}`, // 👈 Headers need to be a string
    //         },
    //     })
    //         .then((res) => res.json())
    //         .then((data) => console.log(data))
    //         .catch((err) => console.error(err));
    // };
    //
    // return (
    //     <div>
    //         <input type="file" onChange={handleFileChange}/>
    //
    //         <div>{file && `${file.name} - ${file.type}`}</div>
    //
    //         <button onClick={handleUploadClick}>Upload</button>
    //     </div>
    // );

    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        setFile(selectedFile || null);
    }

    const handleUpload = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!file) return;

        const formData = new FormData();
        formData.append('image', file);

        fetch('https://glitchtagramcli.azurewebsites.net/Pictures/uploadImage', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }

    return (
        <div>
            <form onSubmit={handleUpload}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
    
}
export default FileUploadSingle;