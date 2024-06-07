/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ResetPasswordImport } from './routes/reset-password'
import { Route as PropertiesImport } from './routes/properties'
import { Route as PrivacyPolicyImport } from './routes/privacy-policy'
import { Route as PricingImport } from './routes/pricing'
import { Route as PaymentImport } from './routes/payment'
import { Route as ContactImport } from './routes/contact'
import { Route as AboutImport } from './routes/about'
import { Route as AuthUserImport } from './routes/_auth-user'
import { Route as AuthOwnerImport } from './routes/_auth-owner'
import { Route as AuthAdminImport } from './routes/_auth-admin'
import { Route as IndexImport } from './routes/index'
import { Route as PropertiesIdImport } from './routes/properties_.$id'
import { Route as AuthOwnerManagePropertiesImport } from './routes/_auth-owner/manage-properties'
import { Route as AuthAdminAdminDashboardImport } from './routes/_auth-admin/admin-dashboard'
import { Route as AuthUserSettingsRouteImport } from './routes/_auth-user/_settings/route'
import { Route as AuthOwnerManagePropertiesAddNewImport } from './routes/_auth-owner/manage-properties_.add-new'
import { Route as AuthAdminAdminDashboardIdImport } from './routes/_auth-admin/admin-dashboard_.$id'
import { Route as AuthUserSettingsSettingsAccountImport } from './routes/_auth-user/_settings/settings.account'
import { Route as AuthOwnerManagePropertiesEditIdImport } from './routes/_auth-owner/manage-properties_.edit.$id'

// Create/Update Routes

const ResetPasswordRoute = ResetPasswordImport.update({
  path: '/reset-password',
  getParentRoute: () => rootRoute,
} as any)

const PropertiesRoute = PropertiesImport.update({
  path: '/properties',
  getParentRoute: () => rootRoute,
} as any)

const PrivacyPolicyRoute = PrivacyPolicyImport.update({
  path: '/privacy-policy',
  getParentRoute: () => rootRoute,
} as any)

const PricingRoute = PricingImport.update({
  path: '/pricing',
  getParentRoute: () => rootRoute,
} as any)

const PaymentRoute = PaymentImport.update({
  path: '/payment',
  getParentRoute: () => rootRoute,
} as any)

const ContactRoute = ContactImport.update({
  path: '/contact',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const AuthUserRoute = AuthUserImport.update({
  id: '/_auth-user',
  getParentRoute: () => rootRoute,
} as any)

const AuthOwnerRoute = AuthOwnerImport.update({
  id: '/_auth-owner',
  getParentRoute: () => rootRoute,
} as any)

const AuthAdminRoute = AuthAdminImport.update({
  id: '/_auth-admin',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PropertiesIdRoute = PropertiesIdImport.update({
  path: '/properties/$id',
  getParentRoute: () => rootRoute,
} as any)

const AuthOwnerManagePropertiesRoute = AuthOwnerManagePropertiesImport.update({
  path: '/manage-properties',
  getParentRoute: () => AuthOwnerRoute,
} as any)

const AuthAdminAdminDashboardRoute = AuthAdminAdminDashboardImport.update({
  path: '/admin-dashboard',
  getParentRoute: () => AuthAdminRoute,
} as any)

const AuthUserSettingsRouteRoute = AuthUserSettingsRouteImport.update({
  id: '/_settings',
  getParentRoute: () => AuthUserRoute,
} as any)

const AuthOwnerManagePropertiesAddNewRoute =
  AuthOwnerManagePropertiesAddNewImport.update({
    path: '/manage-properties/add-new',
    getParentRoute: () => AuthOwnerRoute,
  } as any)

const AuthAdminAdminDashboardIdRoute = AuthAdminAdminDashboardIdImport.update({
  path: '/admin-dashboard/$id',
  getParentRoute: () => AuthAdminRoute,
} as any)

const AuthUserSettingsSettingsAccountRoute =
  AuthUserSettingsSettingsAccountImport.update({
    path: '/settings/account',
    getParentRoute: () => AuthUserSettingsRouteRoute,
  } as any)

const AuthOwnerManagePropertiesEditIdRoute =
  AuthOwnerManagePropertiesEditIdImport.update({
    path: '/manage-properties/edit/$id',
    getParentRoute: () => AuthOwnerRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_auth-admin': {
      id: '/_auth-admin'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthAdminImport
      parentRoute: typeof rootRoute
    }
    '/_auth-owner': {
      id: '/_auth-owner'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthOwnerImport
      parentRoute: typeof rootRoute
    }
    '/_auth-user': {
      id: '/_auth-user'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthUserImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/contact': {
      id: '/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactImport
      parentRoute: typeof rootRoute
    }
    '/payment': {
      id: '/payment'
      path: '/payment'
      fullPath: '/payment'
      preLoaderRoute: typeof PaymentImport
      parentRoute: typeof rootRoute
    }
    '/pricing': {
      id: '/pricing'
      path: '/pricing'
      fullPath: '/pricing'
      preLoaderRoute: typeof PricingImport
      parentRoute: typeof rootRoute
    }
    '/privacy-policy': {
      id: '/privacy-policy'
      path: '/privacy-policy'
      fullPath: '/privacy-policy'
      preLoaderRoute: typeof PrivacyPolicyImport
      parentRoute: typeof rootRoute
    }
    '/properties': {
      id: '/properties'
      path: '/properties'
      fullPath: '/properties'
      preLoaderRoute: typeof PropertiesImport
      parentRoute: typeof rootRoute
    }
    '/reset-password': {
      id: '/reset-password'
      path: '/reset-password'
      fullPath: '/reset-password'
      preLoaderRoute: typeof ResetPasswordImport
      parentRoute: typeof rootRoute
    }
    '/_auth-user/_settings': {
      id: '/_auth-user/_settings'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthUserSettingsRouteImport
      parentRoute: typeof AuthUserImport
    }
    '/_auth-admin/admin-dashboard': {
      id: '/_auth-admin/admin-dashboard'
      path: '/admin-dashboard'
      fullPath: '/admin-dashboard'
      preLoaderRoute: typeof AuthAdminAdminDashboardImport
      parentRoute: typeof AuthAdminImport
    }
    '/_auth-owner/manage-properties': {
      id: '/_auth-owner/manage-properties'
      path: '/manage-properties'
      fullPath: '/manage-properties'
      preLoaderRoute: typeof AuthOwnerManagePropertiesImport
      parentRoute: typeof AuthOwnerImport
    }
    '/properties/$id': {
      id: '/properties/$id'
      path: '/properties/$id'
      fullPath: '/properties/$id'
      preLoaderRoute: typeof PropertiesIdImport
      parentRoute: typeof rootRoute
    }
    '/_auth-admin/admin-dashboard/$id': {
      id: '/_auth-admin/admin-dashboard/$id'
      path: '/admin-dashboard/$id'
      fullPath: '/admin-dashboard/$id'
      preLoaderRoute: typeof AuthAdminAdminDashboardIdImport
      parentRoute: typeof AuthAdminImport
    }
    '/_auth-owner/manage-properties/add-new': {
      id: '/_auth-owner/manage-properties/add-new'
      path: '/manage-properties/add-new'
      fullPath: '/manage-properties/add-new'
      preLoaderRoute: typeof AuthOwnerManagePropertiesAddNewImport
      parentRoute: typeof AuthOwnerImport
    }
    '/_auth-owner/manage-properties/edit/$id': {
      id: '/_auth-owner/manage-properties/edit/$id'
      path: '/manage-properties/edit/$id'
      fullPath: '/manage-properties/edit/$id'
      preLoaderRoute: typeof AuthOwnerManagePropertiesEditIdImport
      parentRoute: typeof AuthOwnerImport
    }
    '/_auth-user/_settings/settings/account': {
      id: '/_auth-user/_settings/settings/account'
      path: '/settings/account'
      fullPath: '/settings/account'
      preLoaderRoute: typeof AuthUserSettingsSettingsAccountImport
      parentRoute: typeof AuthUserSettingsRouteImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AuthAdminRoute: AuthAdminRoute.addChildren({
    AuthAdminAdminDashboardRoute,
    AuthAdminAdminDashboardIdRoute,
  }),
  AuthOwnerRoute: AuthOwnerRoute.addChildren({
    AuthOwnerManagePropertiesRoute,
    AuthOwnerManagePropertiesAddNewRoute,
    AuthOwnerManagePropertiesEditIdRoute,
  }),
  AuthUserRoute: AuthUserRoute.addChildren({
    AuthUserSettingsRouteRoute: AuthUserSettingsRouteRoute.addChildren({
      AuthUserSettingsSettingsAccountRoute,
    }),
  }),
  AboutRoute,
  ContactRoute,
  PaymentRoute,
  PricingRoute,
  PrivacyPolicyRoute,
  PropertiesRoute,
  ResetPasswordRoute,
  PropertiesIdRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_auth-admin",
        "/_auth-owner",
        "/_auth-user",
        "/about",
        "/contact",
        "/payment",
        "/pricing",
        "/privacy-policy",
        "/properties",
        "/reset-password",
        "/properties/$id"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_auth-admin": {
      "filePath": "_auth-admin.tsx",
      "children": [
        "/_auth-admin/admin-dashboard",
        "/_auth-admin/admin-dashboard/$id"
      ]
    },
    "/_auth-owner": {
      "filePath": "_auth-owner.tsx",
      "children": [
        "/_auth-owner/manage-properties",
        "/_auth-owner/manage-properties/add-new",
        "/_auth-owner/manage-properties/edit/$id"
      ]
    },
    "/_auth-user": {
      "filePath": "_auth-user.tsx",
      "children": [
        "/_auth-user/_settings"
      ]
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/contact": {
      "filePath": "contact.tsx"
    },
    "/payment": {
      "filePath": "payment.tsx"
    },
    "/pricing": {
      "filePath": "pricing.tsx"
    },
    "/privacy-policy": {
      "filePath": "privacy-policy.tsx"
    },
    "/properties": {
      "filePath": "properties.tsx"
    },
    "/reset-password": {
      "filePath": "reset-password.tsx"
    },
    "/_auth-user/_settings": {
      "filePath": "_auth-user/_settings/route.tsx",
      "parent": "/_auth-user",
      "children": [
        "/_auth-user/_settings/settings/account"
      ]
    },
    "/_auth-admin/admin-dashboard": {
      "filePath": "_auth-admin/admin-dashboard.tsx",
      "parent": "/_auth-admin"
    },
    "/_auth-owner/manage-properties": {
      "filePath": "_auth-owner/manage-properties.tsx",
      "parent": "/_auth-owner"
    },
    "/properties/$id": {
      "filePath": "properties_.$id.tsx"
    },
    "/_auth-admin/admin-dashboard/$id": {
      "filePath": "_auth-admin/admin-dashboard_.$id.tsx",
      "parent": "/_auth-admin"
    },
    "/_auth-owner/manage-properties/add-new": {
      "filePath": "_auth-owner/manage-properties_.add-new.tsx",
      "parent": "/_auth-owner"
    },
    "/_auth-owner/manage-properties/edit/$id": {
      "filePath": "_auth-owner/manage-properties_.edit.$id.tsx",
      "parent": "/_auth-owner"
    },
    "/_auth-user/_settings/settings/account": {
      "filePath": "_auth-user/_settings/settings.account.tsx",
      "parent": "/_auth-user/_settings"
    }
  }
}
ROUTE_MANIFEST_END */