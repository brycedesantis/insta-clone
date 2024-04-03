import { useState } from "react";

export default function usePreviewImage() {
	const [selectedFile, setSelectedFile] = useState(null);
	const maxFileSizeInBytes = 2 * 1024 * 1024; //2MB

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file && file.name.match(/\.(jpg|jpeg|png|gif)$/i)) {
			if (file.size > maxFileSizeInBytes) {
				setSelectedFile(null);
				return;
			}
			const reader = new FileReader();

			reader.onloadend = () => {
				setSelectedFile(reader.result);
			};

			reader.readAsDataURL(file);
		} else {
			setSelectedFile(null);
		}
	};

	return { selectedFile, handleImageChange, setSelectedFile };
}
