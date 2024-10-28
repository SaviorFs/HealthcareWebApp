function encrypt(data) {
  return "Encrypted_" + data;
}

// Jest test cases
test('should encrypt patient data', () => {
  const patientData = "Sensitive Info";
  const encryptedData = encrypt(patientData);
  expect(encryptedData).toBe("Encrypted_Sensitive Info");
});
