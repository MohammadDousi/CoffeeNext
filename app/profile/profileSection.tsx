"use client";

import TitleSection from "@/components/title-section/TitleSection";
import { GetProfileUserQuery } from "@/hooks/clientQuery";
import { typeProfileUser } from "@/utils/type.";
import { FormikErrors, useFormik } from "formik";
import React, { useEffect, useState } from "react";

const ProfileSection = () => {
  const { data: getProfileUser } = GetProfileUserQuery();
  useEffect(() => {
    formik.setValues({
      ...initialValues,
      name: getProfileUser?.data.name,
      mobile: getProfileUser?.data.mobile,
      email: getProfileUser?.data.email,
      avatar: getProfileUser?.data.avatar,
      verify: getProfileUser?.data.verify,
      created_at: getProfileUser?.data.created_at,
    });
  }, [getProfileUser?.data]);

  const [editDisable, setEditDisable] = useState<boolean>(true);
  const initialValues: typeProfileUser = {
    name: "",
    mobile: "",
    email: "",
    password: "",
    avatar: "",
    verify: false,
    created_at: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validate: (values) => {
      const errors: FormikErrors<typeProfileUser> = {};

      if (!values.name) {
        errors.name = "لطفا نام و نام خانوادگی را وارد نمایید";
      }

      if (!values.mobile) {
        errors.mobile = "لطفا شماره تماس را وارد نمایید";
      } else if (!/^09[0-9]{9}$/g.test(values.mobile)) {
        errors.mobile = "شماره موبایل نامعتبر است";
      }

      if (!values.email) {
        errors.email = "لطفا ایمیل معتبری وارد نمایید";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "ایمیل نامعتبر است";
      }

      return errors;
    },
    onSubmit: (values, actions) => {},
  });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="w-full flex flex-col justify-start items-start gap-5"
      >
        <section className="w-full flex flex-col lg:flex-row justify-start items-start gap-5">
          <div className="lg:!w-1/3 form-control space-y-0">
            <div className="label">
              <span className="label-text text-textPrimaryLightColor/50 dark:text-textPrimaryDarkColor/50">
                نام و نام خانوادگی
              </span>
            </div>
            <label className="input">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>

              <input
                name="name"
                type="text"
                placeholder="نام و نام خانوادگی"
                onChange={formik.handleChange}
                value={formik.values.name}
                className="size-full"
                disabled={editDisable && true}
              />
            </label>
            {formik.errors.name && (
              <div className="errorsClass">{formik.errors.name}</div>
            )}
          </div>

          <div className="lg:!w-1/3 form-control space-y-0">
            <div className="label">
              <span className="label-text text-textPrimaryLightColor/50 dark:text-textPrimaryDarkColor/50">
                شماره موبایل
              </span>
            </div>
            <label className="input relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>

              <input
                name="mobile"
                type="text"
                placeholder="موبایل"
                onChange={formik.handleChange}
                value={formik.values.mobile}
                className="size-full !tracking-wider"
                disabled={editDisable && true}
              />

              <div
                className={`absolute left-5 px-2 py-1 text-sm rounded-md ${
                  formik.values.verify
                    ? `text-green-400 bg-green-50 dark:bg-green-800/30`
                    : `text-red-400 bg-red-50 dark:bg-red-800/30`
                } flex flex-row justify-center items-center gap-1`}
              >
                {formik.values.verify ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 lg:size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 lg:size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                )}

                <span className="pt-0.5">
                  {formik.values.verify ? "تایید شده" : "تایید نشده"}
                </span>
              </div>
            </label>
            {formik.errors.mobile && (
              <div className="errorsClass">{formik.errors.mobile}</div>
            )}
          </div>

          <div className="lg:!w-1/3 form-control space-y-0">
            <div className="label">
              <span className="label-text text-textPrimaryLightColor/50 dark:text-textPrimaryDarkColor/50">
                پست الکترونیکی
              </span>
            </div>
            <label className="input">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                />
              </svg>

              <input
                name="email"
                type="text"
                placeholder="پست الکترونیکی"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="size-full"
                disabled={editDisable && true}
              />
            </label>
            {formik.errors.email && (
              <div className="errorsClass">{formik.errors.email}</div>
            )}
          </div>
        </section>
       
        {/* <button type="submit" className="btn btn-primary">
            ورود
          </button> */}
      </form>

      <button
        onClick={() => setEditDisable(!editDisable)}
        className="btn btn-primary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size4 lg:size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
        ویرایش
      </button>

      <TitleSection title="آدرس ها" />
    </>
  );
};

export default ProfileSection;
