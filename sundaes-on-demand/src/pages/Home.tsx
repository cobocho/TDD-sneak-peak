import { useState } from 'react';

const Home = () => {
  const [confirmDisabled, setConfirmDisabled] = useState<boolean>(true);

  return (
    <div>
      <label>
        I agree to Terms and Conditions
        <input
          type="checkbox"
          checked={!confirmDisabled}
          onChange={() => setConfirmDisabled((prev) => !prev)}
        />
      </label>
      <button disabled={confirmDisabled}>Confirm order</button>
    </div>
  );
};

export default Home;
