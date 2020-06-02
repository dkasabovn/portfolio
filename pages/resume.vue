<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-sm-12">
                <b-card class="h-100">
                    <h3>Robotics</h3>
                    <p>Software member of Valor 6800. Check out my repo from last year on QuadX <a href="https://github.com/QuadX6299/2019-2020" target="_blank" class="red-link">2019-2020 Repository</a></p>
                    <h6>Technologies</h6>
                    <ul>
                        <li>Java</li>
                        <li>Kotlin</li>
                        <li><a href="https://github.com/OpenFTC/RevExtensions2" class="lk-link" target="_blank">Revextensions 2</a></li>
                        <li><a href="https://github.com/acmerobotics/ftc-dashboard" class="lk-link" target="_blank">FTC Dashboard</a></li>
                        <li><a href="https://github.com/QuadX6299/2019-2020/tree/master/TeamCode/src/main/java/org/firstinspires/ftc/teamcode/Lib" class="lk-link" target="_blank">Fully Custom Pure-Pursuit</a></li>
                        <li><a href="https://github.com/QuadX6299/2019-2020/blob/master/TeamCode/src/main/java/org/firstinspires/ftc/teamcode/Lib/Odometry/Odom1.kt" class="lk-link" target="_blank">3 Tracking Wheel Odometry</a></li>
                        <li><a href="https://github.com/QuadX6299/2019-2020/blob/master/TeamCode/src/main/java/org/firstinspires/ftc/teamcode/Lib/Path/PureUtil.kt" class="lk-link" target="_blank">Holonomic Control</a></li>
                    </ul>
                    <b-table borderless :items="robotics"></b-table>
                </b-card>
            </div>
            <div class="col-lg-4 col-sm-12">
                <b-card class="h-100">
                    <h3>Academics</h3>
                    <p>Class of 2021 at Vandegrift HS</p>
                    <h6>Classes Taken</h6>
                    <ul>
                        <li>IB Computer Science 3 & 4</li>
                        <li>AP Computer Science A</li>
                        <li>AP BC & AB Calculus</li>
                        <li>AP HUG</li>
                        <li>AP WHAP</li>
                        <li>IB Physics</li>
                        <li>IB Design Tech</li>
                    </ul>
                    <b-table borderless :items="academics"></b-table>
                </b-card>
            </div>
            <div class="col-lg-4 col-sm-12">
                <b-card class="h-100">
                    <h3>Competitive Programming</h3>
                    <p>I partake in <a href="http://www.usaco.org/index.php" class="red-link" target="_blank">USACO</a> and Comp Sci UIL</p>
                    <h6>Training Used</h6>
                    <ul>
                        <li><a href="https://cpbook.net/" class="lk-link" target="_blank">Competitive Programming 3 Steven Halim</a></li>
                        <li>LeetCode</li>
                        <li>Hackerrank</li>
                        <li>USACO Training</li>
                    </ul>
                    <b-table borderless :items="compsci"></b-table>
                </b-card>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-lg-4 col-sm-12">
                <b-card class="h-100">
                    <h3>Self Learning</h3>
                    <p>To acquire new skills I take online courses or read books</p>
                    <h6>Resources</h6>
                    <ul>
                        <li><a href="https://classroom.udacity.com/courses/cs373" class="lk-link" target="_blank">Udemy Robotics</a></li>
                        <li><a href="https://cpbook.net/" class="lk-link" target="_blank">Competitive Programming 3</a></li>
                        <li>Nuxt.js Documentation</li>
                        <li>USACO Training</li>
                        <li><a href="https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850" class="lk-link" target="_blank">Cracking the Coding Interview</a></li>
                    </ul>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            "robotics": [
                {"award": "1st Inspire Austin Metro League", "date": "Feb 2020"},
                {"award": "2nd Nomination Control Award", "date": "Feb 2020"},
                {"award": "2nd Inspire Worlds", "date": "April 2019"}
            ],
            "academics": [
                {"metrics": "SAT: 1560", "date": "Nov 2019"},
                {"metrics": "AP Computer Science: 5", "date": "May 2019"},
                {"metrics": "AP AB Calc: 5", "date": "May 2019"},
                {"metrics": "AP World History: 5", "date": "May 2019"}
            ],
            "compsci": [
                {"event": "RRHS UIL Jan. 20", "rank": "15 overall"},
                {"event": "Hackerrank Algorithms", "rank": "Gold"},
                {"event": "USACO 2020", "rank": "Gold"},
                {"event": "USACO 2019", "rank": "Silver"}
            ]
        }
    },
    mounted() {
        Prism.highlightAll()
    }
}
</script>

<style scoped>
.lk-link {
    color: rgba(0, 0, 0, .7);
    text-decoration: underline;
    cursor: pointer;
}
</style>