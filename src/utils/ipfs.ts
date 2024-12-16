import {ThirdwebStorage} from '@thirdweb-dev/storage'

const storage = new ThirdwebStorage({
  secretKey: process.env.THIRDWEB_SECRET_KEY,
  clientId: process.env.THIRDWEB_CLIENT_ID,   
});

export const uploadToIPFS = async (file: File): Promise<string> => {
  try {
    const upload = await storage.upload(file);
    const url = storage.resolveScheme(upload);
    console.log("IPFS URL:", url);
    return url;
  } catch (error) {
    console.error("Failed to upload to IPFS:", error);
    throw new Error("IPFS upload failed. Check your credentials and network.");
  }
};
