const queryKeys = {
  deviceKeyData: (deviceId: string) => ["deviceKeyData", deviceId] as const,
  deviceValueData: (deviceId: string) => ["deviceValueData", deviceId] as const,
};

export default queryKeys;
