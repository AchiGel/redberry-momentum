import {
  ImageUloadImput,
  ImageUploadLabel,
  PreviewBox,
  PreviewImageBox,
  PreviewRemoveButton,
  PrevImage,
  PrevImageContainer,
  PrevPlaceholderContainer,
  PrevSpan,
} from "./AgentAvata.styled";
import { FormLabel } from "./CreateAgentModal.styled";
import { useEffect, useState } from "react";

export default function AgentAvatar({
  avatar,
  handleFileChange,
}: {
  avatar: File | null;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [imagePrev, setImagePrev] = useState<string | null>(null);

  useEffect(() => {
    if (avatar) {
      const objectUrl = URL.createObjectURL(avatar);
      setImagePrev(objectUrl);
    } else {
      setImagePrev(null);
    }

    return () => {
      if (imagePrev) {
        URL.revokeObjectURL(imagePrev);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [avatar]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      handleFileChange(e);
    }
  };

  const removePreview = () => {
    if (imagePrev) {
      URL.revokeObjectURL(imagePrev);
    }
    setImagePrev(null);
  };

  return (
    <>
      <FormLabel htmlFor="avatar">ავატარი</FormLabel>
      {avatar && imagePrev ? (
        <PreviewBox $avatar={avatar}>
          <PreviewImageBox>
            <PrevImageContainer>
              <PrevImage src={imagePrev} alt="image" />
            </PrevImageContainer>
            <PreviewRemoveButton onClick={removePreview} />
          </PreviewImageBox>
        </PreviewBox>
      ) : (
        <ImageUploadLabel htmlFor="avatar">
          <PrevPlaceholderContainer>
            <img src="/image_frame.png" alt="" />
            <PrevSpan>ატვირთე ფოტო</PrevSpan>
          </PrevPlaceholderContainer>
        </ImageUploadLabel>
      )}
      <ImageUloadImput
        type="file"
        id="avatar"
        accept="image/*"
        onChange={handleImageChange}
      />
    </>
  );
}
