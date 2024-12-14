import { userInputAction } from "@/app/util/serverActions/formAction";
const GeneralForm = () => {
  
  return (
    <div>
      <form action={userInputAction}>
        <input type="text" name="name1"/>
        <input type="text" name="name2"/>
        <input type="text" name="name3"/>
        <input type="text" name="name4"/>
        <input type="text" name="name5"/>
        <input type="text" name="name6"/>
        <input type="text" name="name7"/>
        <input type="text" name="name8"/>
        <input type="text" name="name9"/>
        <input type="text" name="name10"/>
        <button type="submit">general submit </button>
      </form>
    </div>
  );
};

export default GeneralForm;
