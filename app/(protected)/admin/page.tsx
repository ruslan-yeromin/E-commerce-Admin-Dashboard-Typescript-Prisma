"use client";

import { admin } from "@/actions/admin";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserRole } from "@prisma/client";
import React from "react";

const AdminPage = () => {
  const onServerActionClick = () => {
    admin().then((data) => {
      if (data.error) {
        console.log("Error");
      }

      if (data.success) {
        console.log("Success");
      }
    });
  };

  const onApiRouteClick = () => {
    fetch("/api/admin").then((response) => {
      if (response.ok) {
        console.log("Okay");
      } else {
        console.log("Not okay");
      }
    });
  };
  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">Admin Page</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="You allowed to see this content" />
        </RoleGate>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin-only API Route</p>
          <Button onClick={onApiRouteClick}>Click to test</Button>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin-only Server Action</p>
          <Button onClick={onServerActionClick}>Click to test</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
