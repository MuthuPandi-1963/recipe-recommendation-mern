import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as GitHubStrategy } from "passport-github2";
import User from "../model/user.model.js";
import { envLoader } from "./envLoader.js";

// 🔹 Google OAuth Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: envLoader("GOOGLE_CLIENT_ID"),
      clientSecret: envLoader("GOOGLE_CLIENT_SECRET"),
      callbackURL: envLoader("GOOGLE_CALLBACK_URL"),
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value;
        let user = await User.findOne({ email });

        if (!user) {
          user = await User.create({
            username: profile.displayName,
            email,
            googleId: profile.id,
            authType: "Google",
            isLoggedIn: true,
          });
        } else {
          if (!user.isLoggedIn) {
            user.isLoggedIn = true;
            await user.save();
          }
        }

        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

// 🔹 GitHub OAuth Strategy
passport.use(
  new GitHubStrategy(
    {
      clientID: envLoader("GITHUB_CLIENT_ID"),
      clientSecret: envLoader("GITHUB_CLIENT_SECRET"),
      callbackURL: envLoader("GITHUB_CALLBACK_URL"),
      scope: ["user:email"], // ✅ ensure emails are returned
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let email = null;

        // GitHub sometimes provides emails in profile.emails
        if (profile.emails && profile.emails.length > 0) {
          email = profile.emails[0].value;
        }

        // Fallback if email is missing
        if (!email) {
          email = `github_${profile.id}@noemail.com`;
        }

        let user = await User.findOne({ email });

        if (!user) {
          user = await User.create({
            username: profile.username,
            email,
            githubId: profile.id,
            authType: "GitHub",
            isLoggedIn: true,
          });
        } else {
          if (!user.isLoggedIn) {
            user.isLoggedIn = true;
            await user.save();
          }
        }

        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);


export default passport;
