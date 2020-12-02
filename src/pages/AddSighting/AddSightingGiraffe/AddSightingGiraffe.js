import React from "react";
import Dragger from "react-physics-dragger";
import InnerHeader from "../../../components/Headers/InnerHeader/InnerHeader";
import SectionSeparator from "../../../components/SectionSeperator/SectionSeparator";
import styles from "./AddSightingGiraffe.module.scss";
import InputField from "../../../components/Form/InputField";

const AddSightingMenu = () => {
  return (
    <div className={styles["inner-page"]}>
      <SectionSeparator type="curved-right" theme="blue" separator_color="yellow-dark">
        <InnerHeader origin="/sightings/add">
          Add Sighting <span>Rothschild's Giraffe</span>
        </InnerHeader>
      </SectionSeparator>

      {/*TODO section > form? */}
      <section>
        <SectionSeparator type="square" theme="yellow-dark">
          <div className={styles["form-input"]}>
            <InputField name="Date" />
            <InputField name="Time" />
            <InputField name="Longitude" />
            <InputField name="Latitude" />
          </div>
        </SectionSeparator>

        <SectionSeparator type="semi-circle" theme="white" separator_color="yellow-dark">
          <div>
            <Dragger
              friction={0.8}
              onStaticClick={(e) => {
                console.log(e);
              }}
            >
              <button>1</button>
              <button>2</button>
              <button>3</button>
            </Dragger>
            <Dragger friction={0.8}>
              <button>1</button>
              <button>1</button>
              <button>1</button>
            </Dragger>
          </div>
        </SectionSeparator>
      </section>
      <div>nav</div>
    </div>
  );
};

export default AddSightingMenu;
