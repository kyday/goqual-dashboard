import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { CContainer, CSpinner } from "@coreui/react";
import routes from "@/Routes";

const Content = () => {
  return (
    <CContainer className="m-0">
      <Suspense fallback={<CSpinner color="primary" />}>
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
