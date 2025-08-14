import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long!" }),
  age: z
    .number({ invalid_type_error: "Age is required!" })
    .int()
    .positive()
    .min(18, { message: "You must be at least 18 years old!" }),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const ageRef = useRef<HTMLInputElement>(null);

  //   const person = {
  //     name: "",
  //     age: 0,
  //   };
  //   const [person, setPerson] = React.useState({
  //     name: "",
  //     age: "",
  //   });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     // if (nameRef.current !== null) person.name = nameRef.current.value;
  //     // if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);

  //     console.log(person);
  //   };

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
  };
  return (
    <form
      action=""
      onSubmit={handleSubmit(onSubmit)}
      className="container mt-5"
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          //   onChange={(e) => setPerson({ ...person, name: e.target.value })}
          //   value={person.name}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && (
          <p className="text-danger text-sm pt-1">{errors.name.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          //   value={person.age}
          //   onChange={(e) =>
          //     setPerson({ ...person, age: parseInt(e.target.value) })
          //   }
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && (
          <p className="text-danger text-sm pt-1">{errors.age.message}</p>
        )}
      </div>

      <button className="btn btn-primary" type="submit" disabled={!isValid}>
        submit
      </button>
    </form>
  );
};

export default Form;
