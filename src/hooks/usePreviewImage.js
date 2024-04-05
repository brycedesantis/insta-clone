import { useState } from "react";
import { toast } from "react-hot-toast";

export default function usePreviewImage() {
	const [selectedFile, setSelectedFile] = useState(null);
	const maxFileSizeInBytes = 4 * 1024 * 1024; //4MB

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file && file.name.match(/\.(jpg|jpeg|png|gif)$/i)) {
			if (file.size > maxFileSizeInBytes) {
				toast.error("File too large. Must be smaller than 4MB");
				setSelectedFile(null);
				return;
			}
			const reader = new FileReader();

			reader.onloadend = () => {
				setSelectedFile(reader.result);
			};

			reader.readAsDataURL(file);
		} else {
			toast.error("Please select an image file");
			setSelectedFile(null);
		}
	};

	return { selectedFile, handleImageChange, setSelectedFile };
}
