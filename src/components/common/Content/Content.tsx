import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { CContainer, CSpinner } from "@coreui/react";
import routes from "@/Routes";

const Content = () => {
  return (
    <CContainer className="p-3">
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-[300px] w-full">
            <CSpinner color="primary" />
          </div>
        }
      >
        <Routes>
          {routes.map((route) => {
            return (
              route.element && (
                <Route
                  key={route.name}
                  path={route.path}
                  element={<route.element />}
                />
              )
            );
          })}
        </Routes>
      </Suspense>
    </CContainer>
  );
};

export default React.memo(Content);
