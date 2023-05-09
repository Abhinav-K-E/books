
import { Rings } from  'react-loader-spinner'

export const Loader = () => {
  return (
    <div className="loader">
        <Rings
        height="80"
        width="80"
        color="#2a1a0fd6"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
        />
    </div>
  );
};