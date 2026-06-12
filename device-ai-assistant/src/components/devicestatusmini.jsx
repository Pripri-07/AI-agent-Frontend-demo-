function DeviceStatusMini() {
  return (
    <div className="m-4 bg-blue-50 rounded-2xl p-4">
      <div className="flex justify-between items-start">

        <div>
          <p className="text-xs text-gray-500">
            Device Status
          </p>

          <h3 className="font-semibold">
            Active Medical Device
          </h3>
        </div>

        <span
          className="
          bg-green-100
          text-green-700
          px-3
          py-1
          rounded-full
          text-xs
          font-medium
          "
        >
          Healthy
        </span>

      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">

        <div>
          <p className="text-gray-500">
            Device Health
          </p>

          <p className="font-semibold">
            92%
          </p>
        </div>

        <div>
          <p className="text-gray-500">
            Connection
          </p>

          <p className="font-semibold">
            Secure
          </p>
        </div>

      </div>
    </div>
  );
}

export default DeviceStatusMini;