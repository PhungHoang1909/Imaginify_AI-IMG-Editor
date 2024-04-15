import { useToast } from "../ui/use-toast"
import { CldUploadWidget } from 'next-cloudinary'
import Image from "next/image"

type MediaUploaderProps = {
    onValueChange: (value: string) => void;
    setImage: React.Dispatch<any>;
    publicId: string;
    image: any;
    type: string;
}

const MediaUploader = ({
    onValueChange,
    setImage,
    image,
    publicId,
    type
}: MediaUploaderProps) => {
    const {toast} = useToast()

    const onUploadSuccessHandler = (result: any) => {
        toast({
            title: 'Image uploaded succesfully',
            description: '1 credit was deducted from your account',
            duration: 5000,
            className: 'success-toast'
        })
    }

    const onUploadErrorHandler = (result: any) => {
        toast({
            title: 'Somethign went wrong',
            description: 'Please try again',
            duration: 5000,
            className: 'error-toast'
        })
    }

  return (
    <CldUploadWidget
        uploadPreset="ph-imaginify"
        options={{
            multiple: false,
            resourceType: "image"
        }}

        onSuccess={onUploadSuccessHandler}
        onError={onUploadErrorHandler}
    >
        {({ open }) => (
            <div className="flex flex-col gap-4">
                <h3 className="h3-bold text-dark-600">Original</h3>
                
                {publicId ? (
                    <>
                        IMG
                    </>
                ): (
                    <div className="media-uploader_cta" onClick={() => open()}>
                        <div className="media-uploader_cta-image">
                            <Image 
                                src="/assets/icons/add.svg"
                                alt="Add image"
                                width={24}
                                height={24}
                            />
                        </div>
                        <p className="p-14-medium">Click here to Upload image</p>
                    </div>
                )}
            </div>
        )}
    </CldUploadWidget>
  )
}

export default MediaUploader