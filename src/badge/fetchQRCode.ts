export const fetchQRCode = async ({ queryKey }: { queryKey: string[] }) => {
  const qrCodePath = queryKey[1];
  const response = await fetch(`${qrCodePath}`);
  if (!response.ok) {
    throw new Error(`${qrCodePath} failed to fetch QR Code`);
  }

  return await response.text();
};
